<INCLUDE_TYPOSCRIPT: source="FILE:EXT:theme_bootstrap/Configuration/TypoScript/setup.ts">

page {
    includeCSS {
        file1 = EXT:theme_bootstrap_slate/Resources/Public/Stylesheets/bootstrap.min.css
        file2 >
        file3 >
    }
    10 {
        file.stdWrap.cObject.stdWrap.dataWrap = EXT:theme_bootstrap/Resources/Private/Templates/|.html
        layoutRootPath  = EXT:theme_bootstrap/Resources/Private/Layouts/
        partialRootPath = EXT:theme_bootstrap/Resources/Private/Partials/
    }
}
