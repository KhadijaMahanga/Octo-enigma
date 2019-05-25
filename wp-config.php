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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress');

/** MySQL database username */
define( 'DB_USER', 'wordpress');

/** MySQL database password */
define( 'DB_PASSWORD', 'wordpress');

/** MySQL hostname */
define( 'DB_HOST', 'db:3306');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3445acc5c72b4302612a40948fed5d2315dc080f');
define( 'SECURE_AUTH_KEY',  'a49f8924bc5732be7e3a32f9e20826e2eb890ab6');
define( 'LOGGED_IN_KEY',    '5bbc85b888a2ff09d784d24f670bbfd65e0489d2');
define( 'NONCE_KEY',        'aacbea26b2db34d5cd6a0742e9bca533c2727613');
define( 'AUTH_SALT',        '11ba7123668b3fbdd1061699a3e7e03d35c75ed8');
define( 'SECURE_AUTH_SALT', '3344ef60db8f04a1e28ec04974e344df3bb1d71a');
define( 'LOGGED_IN_SALT',   '635b873eec5fecce9fc60a66318be815c07888a1');
define( 'NONCE_SALT',       '6c6c426d1a061c62c85a39301fc6a54551f8b85e');

define('JWT_AUTH_SECRET_KEY', ' 9.Ki&ab|y;Ly(7w)ze-Gu)f9aIM26R6x4jAxMHfc]%B3|6Z!|JO^ojXCG]bIa*1');
define('JWT_AUTH_CORS_ENABLE', true);
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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

// If we're behind a proxy server and using HTTPS, we need to alert Wordpress of that fact
// see also http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
