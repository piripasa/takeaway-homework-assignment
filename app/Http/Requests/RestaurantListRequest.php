<?php

namespace App\Http\Requests;

class RestaurantListRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'status' => 'in:open,closed,order ahead',
            'sortBy' => 'in:bestMatch,newest,ratingAverage,distance,popularity,averageProductPrice,deliveryCosts,minCost',
            'sortType' => 'in:asc,desc',
            'page' => 'integer|min:1',
            'perPage' => 'integer|min:1|max:25'
        ];
    }
}
