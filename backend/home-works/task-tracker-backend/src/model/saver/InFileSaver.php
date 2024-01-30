<?php

namespace Taskforge\Backend\model\saver;

class InFileSaver implements Saver
{
    private string $filename;

    public function __construct()
    {
        $this->filename = "../../db.json";
    }

    public function save($model): void
    {
        $file = fopen($this->filename, "a");
        $jsonOfModel = json_encode(var_dump($model));
        fwrite($file, $jsonOfModel, count($jsonOfModel));
    }
}