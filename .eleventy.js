const safeJsonStringify = require('safe-json-stringify');
const slugify = require('slugify');
const moment = require('moment');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter('date', date => {
        return moment(date).format('LL');
    });

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

    eleventyConfig.setLibrary("md", mdInstance);

    eleventyConfig.addFilter("sortMenu", function (collection, sortOrder) {
        if (!sortOrder) {
            return collection;
        }

        // console.log(`** Collection is: ` + collection);
        // console.log(`** Wanted order is: ` + sortOrder);

        function path_to_name(path) {
            return String(slugify(path)).toLowerCase();
        }

        function findBestMatch(someArray, value) {
            let maxIndex = -1;
            let lengthOfMatch = 0;

            // Find the longest/latest match.
            // the value will always be a sluggified full page title.
            // someArray will contain possible partial matches.
            // we want to find the index with the longest match

            for (let index = 0; index < someArray.length; index++) {
                let itemAtThisIndex = someArray[index];
                let matches = value.startsWith(itemAtThisIndex);
                if (matches) {
                    if (itemAtThisIndex.length > lengthOfMatch) {
                        maxIndex = Math.max(maxIndex, index);
                        lengthOfMatch = itemAtThisIndex.length;
                    }
                }
            }
            return maxIndex;
        }

        return collection.sort(function (a, b) {
            let a_slug = path_to_name(a.data.title);
            let b_slug = path_to_name(b.data.title);

            /*
            Sort by the 'sortOrder' - a list of slugified title names in wanted order.
            - If we prefix match any, then:
            - match length matters. if we have [roles, plans, roles-in-plans]
            This means we want roles-in-plans AFTER plans
            If the input is [roles, roles-in-plans, plans]

            roles-in-plans will match 'roles' as well as 'roles-in-plans'
            We want to find the index of the LONGEST match. That way, we find the most specific.
             */

            let firstIndex = findBestMatch(sortOrder, a_slug);
            let secondIndex = findBestMatch(sortOrder, b_slug);

            let msg = `check: ${a.url}, a: ${a_slug} (@ ${firstIndex}), b: ${b_slug} (@ ${secondIndex})`;

            // can't find it? push it to bottom
            if (firstIndex === -1 || secondIndex === -1) {
                console.log(`${msg} - can't find one of them. Using natural sort`);
                return 1;
            }

            let number = firstIndex - secondIndex;
            // console.log(`${msg} - return value ${number}...`);
            return number;
        });
    });

    eleventyConfig.addCollection("topleveldocs", function (collection) {

        // console.log(`All collections: `);
        // for(let c of collection.getAll()) {
        //     console.log(`All collections: ` + safeJsonStringify(Object.getOwnPropertyNames(c)));
        //     console.log(`${c.fileSlug}: ${Object.getOwnPropertyNames(c.data.collections)}`);
        // }

        return collection.getFilteredByGlob("**/*.md")
            .filter(function (item) {
                if (!item.data.tags) {
                    return false;
                }
                // console.log(`${item.toString()}`);

                return item.data.tags.indexOf("docs") !== -1;
            });
    });

    eleventyConfig.addShortcode('link', function (text, url) {
        return '<a href="/manual/' + url + '">' + text + "</a>";
    });

    eleventyConfig.addShortcode('video', function (url) {
        return `
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="${url}" frameborder="0" allowfullscreen=""></iframe>
</div><p></p>`;
    });

    eleventyConfig.addShortcode('tip', function (title, text) {
        return `
<div class="callout-block callout-success">
    <div class="icon-holder">
        <i class="fas fa-thumbs-up"></i>
    </div>
    <div class="content">
        <h4 class="callout-title">${title}</h4>
        <p>${text}</p>
    </div>
</div>
`;
    });

    eleventyConfig.addShortcode('info', function (title, text) {
        return `
<div class="callout-block callout-info">
    <div class="icon-holder">
        <i class="fas fa-info-circle"></i>
    </div>
    <div class="content">
        <h4 class="callout-title">${title}</h4>
        <p>${text}</p>
    </div>
</div>
`;
    });

    eleventyConfig.addShortcode('warning', function (title, text) {
        return `
<div class="callout-block callout-warning">
    <div class="icon-holder">
        <i class="fas fa-bug"></i>
    </div>
    <div class="content">
        <h4 class="callout-title">${title}</h4>
        <p>${text}</p>
    </div>
</div>
`;
    });

    eleventyConfig.addPairedShortcode('section', function (content, title, id) {
        if (title) {
            return `
<section id="${id}" class="doc-section">
<h2 class="section-title">${title}</h2>
<div class="section-block">
${content}
</div>
</section>
`;
        } else {
            return `
<section id="${id}" class="doc-section">
<div class="section-block">
${content}
</section>
`;
        }
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
            data: "_data"
        }
    };
};
