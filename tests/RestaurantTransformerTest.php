<?php

namespace Tests;

use App\Services\Pagination\Pagination;
use App\Services\Transformer\RestaurantTransformer;
use App\Services\Transformer\TransformerException;
use Illuminate\Support\Collection;
use PHPUnit\Framework\TestCase;

class RestaurantTransformerTest extends TestCase
{
    public function testShouldInstanceOfCollection()
    {
        $mockObj = $this->makeMock();
        $this->assertArrayHasKey('paginate', $mockObj->transformCollection((new Pagination([]))->paginate()));
    }

    public function testShouldReturnData()
    {
        $mockObj = $this->makeMock();
        $this->assertArrayHasKey('data', $mockObj->transformCollection(new Collection([1,2,3,4])));
    }

    public function testShouldThrowCollectionException()
    {
        $this->expectException(TransformerException::class);
        $mockObj = $this->makeMock();
        $mockObj->transformCollection([]);
    }

    public function testCallbackShouldValid()
    {
        $mockObj = $this->makeMock();
        $this->assertArrayHasKey('paginate', $mockObj->transformCollection((new Pagination([]))->paginate(), 'transform'));
    }

    public function testShouldThrowCallbackException()
    {
        $this->expectException(TransformerException::class);
        $mockObj = $this->makeMock();
        $mockObj->transformCollection((new Pagination([]))->paginate(), 'callback');
    }

    private function makeMock()
    {
        return new RestaurantTransformer();
    }
}
