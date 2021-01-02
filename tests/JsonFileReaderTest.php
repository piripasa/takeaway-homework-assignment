<?php

namespace Tests;

use App\Services\Reader\JsonFileReader;
use PHPUnit\Framework\TestCase;


class JsonFileReaderTest extends TestCase
{
    protected $rootPath;

    protected function setUp(): void
    {
        parent::setUp();
        $this->rootPath = dirname(__DIR__, 1);
    }

    public function testInputFileExist()
    {
        $this->assertFileExists($this->rootPath . '/data/sample.json');
    }

    public function testInputFileMissing()
    {
        $this->assertFileNotExists($this->rootPath . '/missing.json');
    }

    public function testCanReadFile()
    {
        $file = new JsonFileReader($this->rootPath . '/data/sample.json');
        $file->read();
        $this->assertTrue(is_array($file->getData()));
    }

    public function testFileHasContent()
    {
        $file = new JsonFileReader($this->rootPath . '/data/sample.json');
        $file->read();
        $this->assertGreaterThan(0, count($file->getData()));
    }

    public function testEmptyFile()
    {
        $file = new JsonFileReader($this->rootPath . '/data/empty.json');
        $file->read();
        $this->assertEquals(0, count($file->getData()));
    }

    public function testMissingFile()
    {
        $this->expectException(\Exception::class);
        $this->expectExceptionMessage('Wrong path');
        new JsonFileReader($this->rootPath . '/missing.json');
    }

}
