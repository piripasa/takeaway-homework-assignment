<?php

namespace Tests;

use App\Repository\ArrayQueryEngine;
use App\Repository\RestaurantRepository;
use App\Services\Reader\JsonFileReader;
use PHPUnit\Framework\TestCase;


class RestaurantRepositoryTest extends TestCase
{
    public $mockFile;

    public function setUp(): void
    {
        parent::setUp();
        $this->mockFile = dirname(__DIR__, 1) . '/data/sample.json';
    }

    public function testInputFileExist()
    {
        $this->assertFileExists($this->mockFile);
    }

    public function testShouldReturnData()
    {
        $mockObj = $this->makeMock();
        $result = $mockObj->filter(['sortBy' => 'distance', 'sortType' => 'asc', 'status' => 'open', 'name' => '']);
        $this->assertArrayHasKey("name", $result[0]);
    }

    public function testParamMustBeArray()
    {
        $this->expectException(\TypeError::class);
        $mockObj = $this->makeMock();
        $mockObj->filter('');
    }

    private function makeMock()
    {
        return new RestaurantRepository(new JsonFileReader($this->mockFile), new ArrayQueryEngine());
    }

}
