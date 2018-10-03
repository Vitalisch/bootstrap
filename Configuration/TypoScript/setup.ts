page {
    includeCSS {
        bootstrap = EXT:bootstrap/Resources/Public/css/bootstrap.min.css
        #fa = //maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
        #fa.external = 1
    }
    includeJSFooterlibs {
        jquery = //code.jquery.com/jquery-3.1.1.slim.min.js
        jquery.external = 1
        bootstrap = EXT:bootstrap/Resources/Public/js/bootstrap.min.js
    }
}

tt_content {

    # Alerts
    bootstrap_alert = FLUIDTEMPLATE
    bootstrap_alert {
        file = EXT:bootstrap/Resources/Private/Templates/ContentElements/Alert.html
        dataProcessing {
            10 = KnowEx\Bootstrap\DataProcessing\AlertProcessor
        }
    }

    # Cards
    bootstrap_card = FLUIDTEMPLATE
    bootstrap_card {
        file = EXT:bootstrap/Resources/Private/Templates/ContentElements/Card.html
        dataProcessing {
            10 = KnowEx\Bootstrap\DataProcessing\CardProcessor
        }
    }

    # List group
    bootstrap_list = FLUIDTEMPLATE
    bootstrap_list {
        file = EXT:bootstrap/Resources/Private/Templates/ContentElements/List.html
        dataProcessing {
            10 = KnowEx\Bootstrap\DataProcessing\ListProcessor
        }
    }
}