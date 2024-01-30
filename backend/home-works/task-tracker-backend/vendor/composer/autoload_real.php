<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitcde01c3a21cc7f6565dd784ae374e935
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitcde01c3a21cc7f6565dd784ae374e935', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitcde01c3a21cc7f6565dd784ae374e935', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitcde01c3a21cc7f6565dd784ae374e935::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
