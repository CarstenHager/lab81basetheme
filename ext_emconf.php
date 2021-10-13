<?php

/**
 * Extension Manager/Repository config file for ext "lab81basetheme".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'lab81basetheme',
    'description' => 'Grundlegene Einstellungen für alle Webseiten unsere Kunden',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '10.4.21-11.99.99',
            'fluid_styled_content' => '10.4.21-11.99.99',
            'rte_ckeditor' => '10.4.21-11.99.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Lab81Medienagentur\\Lab81basetheme\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'clearCacheOnLoad' => true,
    'author' => 'Carsten Hager',
    'author_email' => 'ch@lab81.de',
    'author_company' => 'Lab81 Medienagentur',
    'version' => '1.0.0',
];
