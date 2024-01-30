<?php

namespace Taskforge\Backend\controller;

use Taskforge\Backend\model\saver\Saver;

class Controller
{
    private Saver $saver;
    public function __construct($saver)
    {
        $this->saver = $saver;
    }
    public function save($model): void
    {
        $this->saver->save($model);
    }
}