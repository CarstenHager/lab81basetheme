<?php

use TYPO3\CMS\Core\Log\LogLevel;

defined('TYPO3') || die();

/***************
 * Add default RTE configuration
 */
//$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['lab81basetheme'] = 'EXT:lab81basetheme/Configuration/RTE/Default.yaml';

/***************
 * PageTS
 */
TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:lab81basetheme/Configuration/TsConfig/Page/All.tsconfig">');

/***************
 * Deprecation Log deaktivieren
 */
$GLOBALS['TYPO3_CONF_VARS']['LOG']['TYPO3']['CMS']['deprecations']['writerConfiguration'][LogLevel::NOTICE] = [];

/***************
 * EXT page_speed_insights disable the check on PWA features
 */
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['page_speed_insights']['categories'] = [
    'performance',
    'seo',
    'accessibility',
    'best-practices'
];