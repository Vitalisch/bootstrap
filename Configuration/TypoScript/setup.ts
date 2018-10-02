page = PAGE
page {
    typeNum = 0
    config.contentObjectExceptionHandler = 0

    includeCSS {
        bootstrap = EXT:bootstrap/Resources/Public/css/bootstrap.min.css
        fa = //maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
        fa.external = 1
    }
    includeJSFooterlibs {
        jquery = //code.jquery.com/jquery-3.1.1.slim.min.js
        jquery.external = 1
        bootstrap = EXT:bootstrap/Resources/Public/js/bootstrap.min.js
    }

    10 = FLUIDTEMPLATE
    10 {
        templateName = TEXT
        templateName.stdWrap.cObject = CASE
        templateName.stdWrap.cObject {
            key.data = pagelayout

            pagets__site_package_default = TEXT
            pagets__site_package_default.value = Default

            default = TEXT
            default.value = Default
        }
        templateRootPaths {
            0 = EXT:bootstrap/Resources/Private/Templates/Page/
            1 = {$page.fluidtemplate.templateRootPath}
        }
        partialRootPaths {
            0 = EXT:bootstrap/Resources/Private/Partials/Page/
            1 = {$page.fluidtemplate.partialRootPath}
        }
        layoutRootPaths {
            0 = EXT:bootstrap/Resources/Private/Layouts/Page/
            1 = {$page.fluidtemplate.layoutRootPath}
        }
    }
    10 < styles.content.get
}

config {
    no_cache = 1
}

tt_content {
    # Alerts
    bootstrap_alert = FLUIDTEMPLATE
    bootstrap_alert {
        file = EXT:bootstrap/Resources/Private/Templates/ContentElements/Alert.html
        dataProcessing {
            # Make FlexForm available in {settings} and tt_content.* in {data}
            10 = Knowex\Bootstrap\DataProcessing\AlertProcessor
        }
    }
    # Cards
    bootstrap_card = FLUIDTEMPLATE
    bootstrap_card {
        file = EXT:bootstrap/Resources/Private/Templates/ContentElements/Card.html
        dataProcessing {
            # Make FlexForm available in {settings} and tt_content.* in {data}
            10 = Knowex\Bootstrap\DataProcessing\CardProcessor
        }
    }
}