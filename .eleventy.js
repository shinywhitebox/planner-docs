const safeJsonStringify = require('safe-json-stringify');
const slugify = require('slugify');
const moment = require('moment');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const pluginTOC = require('eleventy-plugin-nesting-toc');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter('date', date => {
        return moment(date).format('LL');
    })

    let mdOptions = {
        html: true,
        breaks: true,
        linkify: true
    };

    let mdInstance = markdownIt(mdOptions);
    mdInstance.use(markdownItAttrs, {
        // optional, these are default options
        leftDelimiter: '{',
        rightDelimiter: '}',
        allowedAttributes: []  // empty array = all attributes are allowed
    });
    mdInstance.use(markdownItAnchor, {});

    eleventyConfig.setLibrary("md", mdInstance);

    eleventyConfig.addPlugin(pluginTOC, {
        tags: ["h1", "h2"],
        wrapper: 'nav',
        wrapperClass: 'nav doc-menu flex-column sticky'
    });

    eleventyConfig.addFilter("sortMenu", function(collection, sortOrder) {
		if(!sortOrder) {
			return collection;
		}

        console.log(`Collection is: ` + collection);
        console.log(`Wanted order is: ` + sortOrder);

        function path_to_name(path) {
            return String(slugify(path)).toLowerCase();
        }

		return collection.sort(function(a, b) {
            let a_title = path_to_name(a.data.title);
            let b_title = path_to_name(b.data.title);
            console.log(`check: ${a.url}, at: ${a_title}, bt: ${b_title}`);

            let firstIndex = sortOrder.findIndex(function(a) { return String(a_title).startsWith(a); });
			let secondIndex = sortOrder.findIndex(function(b) { return String(b_title).startsWith(b); });

			if( firstIndex === -1 ) return -1;
			if( secondIndex === -1 ) return 1;

			return firstIndex - secondIndex;
		});
    });

    eleventyConfig.addCollection("topleveldocs", function(collection) {
       
        // console.log(`All collections: `);
        // for(let c of collection.getAll()) {
        //     console.log(`All collections: ` + safeJsonStringify(Object.getOwnPropertyNames(c)));
        //     console.log(`${c.fileSlug}: ${Object.getOwnPropertyNames(c.data.collections)}`);
        // }

        return collection.getFilteredByGlob("**/*.md")
        .filter(function(item) {
            if(!item.data.tags) {
                return false;
            }
            // console.log(`${item.toString()}`);

            return item.data.tags.indexOf("docs") !== -1;
        });
    })
    
    eleventyConfig.addPairedShortcode('section', function (content, title, id) {
        return `
<section id="${id}" class="doc-section">
<h2 class="section-title">${title}</h2>
<div class="section-block">
${content}
</div>
</section>
`;
    });

    eleventyConfig.addPassthroughCopy("assets");

    return {
        passthroughFileCopy: true,
        markdownTemplatEEngine: "njk",
        templateFormats: ["html", "njk", "md"],

        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data",
        }
    }
}