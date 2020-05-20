<?php
defined('TYPO3_MODE') || die();

/***************
 * Add default RTE configuration
 */
//$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['lab81basetheme'] = 'EXT:lab81basetheme/Configuration/RTE/Default.yaml';

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:lab81basetheme/Configuration/TsConfig/Page/All.tsconfig">');

/***************
 * Deprecation Log deaktivieren
 */
$GLOBALS['TYPO3_CONF_VARS']['LOG']['TYPO3']['CMS']['deprecations']['writerConfiguration'][\TYPO3\CMS\Core\Log\LogLevel::NOTICE] = [];
