<?php
/**
 * Block Category
 *
 * @package Aquila
 */

namespace AQUILA_THEME\Inc;

use AQUILA_THEME\Inc\Traits\Singleton;

class Block_Category {
    use Singleton;

    protected function __construct() {

        // load class.
        $this->setup_hooks();
    }

    protected function setup_hooks() {

        /**
         * Filters.
         */
        add_filter( 'block_categories', [ $this, 'add_block_categories' ] );
    }

    /**
     * Adds a block category
     *
     * @param array $categories => Default block categories
     *
     * @return array => Updated block categories
     */
    public function add_block_categories( $categories ) {

        // pulling slugs from the categories
        $categories_slugs = wp_list_pluck( $categories, 'slug' );

        // if category already exists, returning old categories else adding our category in old categories
        return in_array( 'Richie', $categories_slugs,  true ) ? $categories : array_merge(
            $categories,
            [
                [
                    'slug' => 'Richie',
                    'title' => __( 'Richie', 'aquila' ),
                    'icon' => 'universal-access-alt'
                ]
            ]
        );
    }
}
