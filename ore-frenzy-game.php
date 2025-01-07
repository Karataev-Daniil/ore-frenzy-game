<?php
/*
Plugin Name: Ore Frenzy
Description: A mining clicker game where players extract valuable resources, upgrade their mining speed, and boost their income to build a powerful mining empire.
Version: 0.3
Author: Daniil Karataev
*/

function ore_frenzy_game_enqueue_scripts() {
    // tikhnic scripts
    wp_enqueue_script( 'ore_frenzy-script',                plugins_url('/script.js', __FILE__), array(), null, true);
}
add_action('wp_enqueue_scripts', 'ore_frenzy_game_enqueue_styles');

function ore_frenzy_game_animation_enqueue_scripts() {
    // game scripts
    wp_enqueue_script( 'ore_frenzy_scroll_animation',      plugins_url('/js/scroll-animation.js', __FILE__), array(), get_file_version('/js/scroll-animation.js'), null, true);

    // game scripts
    wp_enqueue_script( 'ore_frenzy_cloud_animation',       plugins_url('/js/cloud-animation.js', __FILE__), array(), get_file_version('/js/cloud-animation.js'), null, true);

    // game fir tree logic
    wp_enqueue_script( 'ore_frenzy_script_fir_tree_logic',  plugins_url('/js/fir-tree-logic.js', __FILE__), array(), get_file_version('/js/fir-tree-logic.js') );

    // game logic
    wp_enqueue_script( 'ore_frenzy_game_script_game_logic',  plugins_url('/js/game-logic.js', __FILE__), array(), get_file_version('/js/game-logic.js') );
}
add_action('wp_enqueue_scripts', 'ore_frenzy_game_animation_enqueue_scripts');

function ore_frenzy_game_enqueue_styles() {
    // tikhnic styles
    wp_enqueue_style( 'ore_frenzy_reset_style',            plugins_url('/css/reset.css', __FILE__), array(), get_file_version('/css/reset.css') );
    wp_enqueue_style( 'ore_frenzy_fonts_style',            plugins_url('/css/fonts.css', __FILE__), array(), get_file_version('/css/fonts.css') );

    wp_enqueue_style( 'ore_frenzy_style',                  plugins_url('/style.css', __FILE__), array(), get_file_version('/style.css') );

    // game styles
    wp_enqueue_style( 'ore_frenzy_game_style_hero_decor',  plugins_url('/css/game-style/hero-decor.css', __FILE__), array(), get_file_version('/css/game-style/hero-decor.css') );
    wp_enqueue_style( 'ore_frenzy_game_style_game_decor',  plugins_url('/css/game-style/game-decor.css', __FILE__), array(), get_file_version('/css/game-style/game-decor.css') );
    wp_enqueue_style( 'ore_frenzy_game_style_fir_tree',  plugins_url('/css/game-style/fir-tree.css', __FILE__), array(), get_file_version('/css/game-style/fir-tree.css') );
}
add_action('wp_enqueue_styles', 'ore_frenzy_game_enqueue_styles');

function ore_frenzy_game_shortcode() {
    ob_start(); ?>
        
    <div id="orfr-game" class="orfr-game-body">
        <section class="hero-decor sky">
            <div class="cloud-block">
            </div>
            <div class="hero-landscap">
                <div class="celestial-bodies">
                    <div class="sun"></div>
                    <div class="moon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="mountain mountain-back"></div>
                <div class="mountain mountain-mid"></div>
                <div class="forest fir-trees snowy"></div>
                <div class="mountain mountain-front"></div>
                <div class="forest fir-trees standard"></div>
                <div class="meadows meadows-back"></div>
                <div class="meadows meadows-mid"></div>
                <div class="ground ground-front"></div>
                <button id="scrollButton" class="buttun-start">Start Game</button>
            </div>
        </section>
        <section class="game-decor">
            <div class="game-board">
                <div class="section-board sidebar-left">
                    <div class="notification-panel">

                    </div>
                    <div class="">
                        
                    </div>
                </div>
                <div class="section-board top-bar">
                    <div class="currency-bar">
                        Деньги: <span id="totalCoins">0</span> $
                    </div>
                    <div class="">
                        
                    </div>
                    <div class="">
                        
                    </div>
                </div>
                <div class="section-board main-content">
                    <div class="mining-fields">
                        <div class="mining-field mining-coal-field">
                            <div class="mining-field-icon">
                                здесь должно быть картина именно этого ресурса 
                                <img src="" alt="" class="">
                            </div>
                            <div>
                                Добыча с угольных рудников: <span id="coalProductionRate">12ед./1мин.</span>
                                Прибыль: <span id="coalProfit">1200ед.</span>
                            </div>
                            <div>
                                Улучшение добычи (цена: <span id="coalUpgradeCost">5</span>$):
                                <button id="upgradeCoal">Улучшить добычу</button>
                            </div>
                        </div>
                        <div class="mining-field add-mining">
                            <button id="addMiningField">Добавить шахту</button>
                        </div>
                    </div>
                    <div class="resource-depot">
                        <div class="resource-coal">
                            <div class="resource-coal-min">
                                Общая добыча угля: <span id="totalCoalProduction">24</span> ед./1мин.
                            </div>
                            <div class="resource-coal-all">
                                Всего угля добыто: <span id="totalCoal">1200</span> ед.
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div class="section-board sidebar-right">
                    <div class="">
                        Продажа ресурсов:
                        <button id="sellCoal">Продать уголь (100$ за ед.)</button>
                        <button id="sellCopper">Продать медь (200$ за ед.)</button>
                    </div>
                    <div class="">
                        Постройка плавильни (переделка руды в слитки)
                        <button id="buildSmelter">Построить плавильню</button>
                    </div>
                </div>
            <div>
        </section>
    </div>

    <?php return ob_get_clean();
}
add_shortcode('ore_frenzy_game', 'ore_frenzy_game_shortcode');

?>