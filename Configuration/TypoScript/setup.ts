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

    # Ausgabe der Grid Elemente
    gridelements_pi1 {
        20 {
            10 {
                setup {
                    # ID des gridelements
                    1 < lib.gridelements.defaultGridSetup
                    1 {
                        wrap = <div class="row">|</div>
                        columns {
                            # colPos ID
                            101 < .default
                            101.wrap = <div class="col-md-6">|</div>
                            # colPos ID
                            102 < .default
                            102.wrap = <div class="col-md-6">|</div>
                        }
                    }

                    # ID des gridelements
                    col2 < lib.gridelements.defaultGridSetup
                    col2 {
                        wrap = <div class="row">|</div>
                        columns {
                            # colPos ID
                            101 < .default
                            101.wrap = <div class="col">|</div>
                            # colPos ID
                            102 < .default
                            102.wrap = <div class="col">|</div>
                        }
                    }

                    # ID des gridelements
                    col3 < lib.gridelements.defaultGridSetup
                    col3 {
                        wrap = <div class="row">|</div>
                        columns {
                            # colPos ID
                            101 < .default
                            101.wrap = <div class="col-md-4">|</div>
                            # colPos ID
                            102 < .default
                            102.wrap = <div class="col-md-4">|</div>
                            # colPos ID
                            103 < .default
                            103.wrap = <div class="col-md-4">|</div>
                        }
                    }

                    # ID des gridelements
                    col4 < lib.gridelements.defaultGridSetup
                    col4 {
                        wrap = <div class="row">|</div>
                        columns {
                            # colPos ID
                            101 < .default
                            101.wrap = <div class="col-md-3">|</div>
                            # colPos ID
                            102 < .default
                            102.wrap = <div class="col-md-3">|</div>
                            # colPos ID
                            103 < .default
                            103.wrap = <div class="col-md-3">|</div>
                            # colPos ID
                            104 < .default
                            104.wrap = <div class="col-md-3">|</div>
                        }
                    }

                    # Card
                    card < lib.gridelements.defaultGridSetup
                    card {
                        columns {
                            # colPos ID
                            101 < .default
                            101 {
                                cObject = FLUIDTEMPLATE
                                cObject {
                                    file = EXT:bootstrap/Resources/Private/Templates/ContentElements/Card.html
                                    dataProcessing {
                                        10 = KnowEx\Bootstrap\DataProcessing\CardProcessor
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

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

    # Cards
    card_body = FLUIDTEMPLATE
    card_body {
        file = EXT:bootstrap/Resources/Private/Templates/ContentElements/CardBody.html
        dataProcessing {
            #10 = KnowEx\Bootstrap\DataProcessing\CardProcessor
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