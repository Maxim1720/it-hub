<?php

namespace Taskforge\Backend\model\saver;

interface Saver
{
    public function save($model) : void;
}