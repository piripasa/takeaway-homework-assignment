<?php

namespace App\Services\Reader;

class JsonFileReader extends Reader
{
    /**
     * FileReader constructor.
     * @param string $filePath
     * @throws \Exception
     */
    function __construct(string $filePath)
    {
        parent::__construct($filePath);
    }

    public function read()
    {
        $data = json_decode(file_get_contents($this->getFilePath()), 1) ?? [];
        $this->setData($data);
    }

    public function getData()
    {
        return array_filter($this->data);
    }
}
