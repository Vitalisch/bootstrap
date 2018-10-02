<?php
defined('TYPO3_MODE') || die('Access denied.');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TSconfig/Page.txt">'
);

call_user_func(
    function($extKey)
	{

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Knowex.Bootstrap',
            'Bootstrap',
            [
                'Cash' => 'list,show,addForm,add,updateForm,update,deleteConfirm,delete',
            ]
        );
    },
    $_EXTKEY
);
