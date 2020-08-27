<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'web_cosme' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '7brL%{b&Pe0Oqk.j0}l]Wi<a*_9@hT#Q)d^L547;7uIKCpmtTD@>]qo9$R_)XnNd' );
define( 'SECURE_AUTH_KEY',  '9,),bC3A;ueIRn*1_,MASIkug9u|O1[,g6;T7UhJebpU8%g<pms$W#;lu/!oEj$Y' );
define( 'LOGGED_IN_KEY',    'j13@C<>@jFJ((;A=FpdZ4LU`TWH-Lae= nA%0it0& OKTNYd>Ds^738,bd_d8wA;' );
define( 'NONCE_KEY',        'of#is@%uJ:u2(.5,|[M{Mq3Q#o/s!V6-Gf7.Tz~@:R@`I&!uNbkzA=>6!h8o?IGR' );
define( 'AUTH_SALT',        'bt3x/vuwZs6hY;SC,-56WyqsHfXJQ ^.Iw?qocTa1%*[},?MOa,_@iN-2HRglM0:' );
define( 'SECURE_AUTH_SALT', 's*uH*R+;Sa,IOU?I?{Js)*]RjH?I$D4j7dk*kVI74_UYzNP3A@*ba>h0Nh[QtLA#' );
define( 'LOGGED_IN_SALT',   '~FtCJ@b{RljGo%r+o)[@Ow6c8 yNASo@rQ.`g~-R^;*2v7X=Ok6W<q~t?kML`Gr8' );
define( 'NONCE_SALT',       'Ov_&G@&8(y!Sj%1NBqY.#QZgz(?X(SF;#[D&8C?~AdA^a.>Z[-b61Dz7 pecp-!q' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
