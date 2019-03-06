<?php
return [
    'ctrl' => [
        'title' => 'Events',
        'label' => 'title',
        'delete' => 'deleted',
        'enablecolumns' => [
            'disabled' => 'hidden',
            'starttime' => 'starttime',
            'endtime' => 'endtime',
        ],
        'iconfile' => 'EXT:core/Resources/Public/Icons/T3Icons/actions/actions-check.svg'
    ],
    'columns' => [
        'hidden' => [
            'exclude' => true,
            'label' => 'LLL:EXT:lang/Resources/Private/Language/locallang_general.xlf:LGL.hidden',
            'config' => [
                'type' => 'check',
                'default' => 0
            ]
        ],
        'pid' => [
            'label' => 'pid',
            'config' => [
                'type' => 'passthrough'
            ]
        ],
        'crdate' => [
            'label' => 'crdate',
            'config' => [
                'type' => 'passthrough',
            ]
        ],
        'tstamp' => [
            'label' => 'tstamp',
            'config' => [
                'type' => 'passthrough',
            ]
        ],
        'sorting' => [
            'label' => 'sorting',
            'config' => [
                'type' => 'passthrough',
            ]
        ],
        'starttime' => [
            'exclude' => true,
            'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:starttime_formlabel',
            'config' => [
                'type' => 'input',
                'renderType' => 'inputDateTime',
                'size' => 16,
                'eval' => 'datetime,int',
                'default' => 0,
                'behaviour' => [
                    'allowLanguageSynchronization' => true,
                ],
            ]
        ],
        'endtime' => [
            'exclude' => true,
            'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:endtime_formlabel',
            'config' => [
                'type' => 'input',
                'renderType' => 'inputDateTime',
                'size' => 16,
                'eval' => 'datetime,int',
                'default' => 0,
                'behaviour' => [
                    'allowLanguageSynchronization' => true,
                ],
            ]
        ],
        'title' => [
            'label' => 'Titel',
            'config' => [
                'type' => 'input',
                'size' => '20',
                'eval' => 'trim'
            ],
        ],
        'active' => [
            'label' => 'Geöffnet',
            'config' => [
                'type' => 'check',
                'default' => 0
            ],
        ],
        'content_elements' => [
            'exclude' => true,
            'label' => 'Content elements',
            'config' => [
                'type' => 'inline',
                'allowed' => 'tt_content',
                'foreign_table' => 'tt_content',
                'foreign_sortby' => 'sorting',
                'foreign_field' => 'bootstrap_content_elements',
                'overrideChildTca' => [
                    'columns' => [
                        'colPos' => [
                            'config' => [
                                'default' => 99,
                            ],
                        ],
                    ],
                ],
                'appearance' => [
                    'collapseAll' => true,
                    'expandSingle' => true,
                    'levelLinksPosition' => 'bottom',
                    'useSortable' => true,
                ]
            ]
        ],
    ],
    'types' => [
        '0' => [
            'showitem' => 'title, active, content_elements',
            'columnsOverrides' => [
                'colPos' => [
                    'config' => [
                        'default' => 1,
                    ],
                ],
            ],
        ],
    ],
];