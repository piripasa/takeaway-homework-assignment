<?php

namespace App\Http\Controllers;

use App\Http\Requests\RestaurantListRequest;
use App\Repository\ArrayQueryEngine;
use App\Repository\RestaurantRepository;
use App\Services\Pagination\Pagination;
use App\Services\Reader\JsonFileReader;
use App\Services\Transformer\RestaurantTransformer;
use Illuminate\Http\Response;

class RestaurantController extends ApiController
{
    private $transformer;

    /**
     * Create a new controller instance.
     * @param RestaurantTransformer $transformer
     */
    public function __construct(RestaurantTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    /**
     * @param RestaurantListRequest $request
     * @return Response
     */
    public function index(RestaurantListRequest $request)
    {
        try {
            $params = [
                'sortBy' => $request->get('sortBy', 'distance'),
                'sortType' => $request->get('sortType', 'asc'),
                'status' => $request->get('status', ''),
                'name' => $request->get('name', ''),
                'favourites' => array_filter(explode(',', $request->get('favourites', '')))
            ];

            $repository = new RestaurantRepository(new JsonFileReader(base_path('data/sample.json')), new ArrayQueryEngine());
            $pagination = new Pagination($repository->filter($params));
            return $this->sendResponse(
                $this->transformer->transformCollection(
                    $pagination->paginate(
                        $request->get('perPage', 25),
                        $request->get('page', 1)
                    ),
                    'transform',
                    'restaurants'
                ),
                'Restaurant list'
            );
        } catch (\Exception $exception) {
            app('log')->error($exception);
            return $this->sendError('Something went wrong', [], 400);
        }
    }
}
