<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Bootstrap 4.1',
    'description' => 'Bootstrap 4.1',
    'category' => 'plugin',
    'author' => 'Vitali Scharov',
    'author_email' => 'scharov@knowex.de',
    'state' => 'alpha',
    'internal' => '',
    'uploadfolder' => '0',
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'version' => '0.0.1',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
    'autoload' => [
        'psr-4' => [
            'KnowEx\\Bootstrap\\' => 'Classes'
        ],
    ]
];