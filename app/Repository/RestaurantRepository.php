<?php


namespace App\Repository;


use App\Services\Reader\Reader;

class RestaurantRepository implements RepositoryInterface
{
    protected $reader;
    protected $query;

    /**
     * RestaurantRepository constructor.
     * @param Reader $reader
     * @param \Nahid\QArray\QueryEngine $query
     */
    public function __construct(Reader $reader, \Nahid\QArray\QueryEngine $query)
    {
        $this->reader = $reader;
        $this->query = $query;
    }

    /**
     * @param array $params
     * @return mixed
     * @throws \Nahid\QArray\Exceptions\InvalidNodeException
     */
    public function filter(array $params): array
    {
        $query = $this->query->collect($this->reader->read()->getData());

        $query->from('restaurants');

        if ($params['status'] != '') {
            $query->where('status', '=', $params['status']);
        }
        if ($params['name'] != '') {
            $query->whereStartsWith('name', $params['name']);
        }
        if (!empty($params['favourites'])) {
            $query->whereIn('name', $params['favourites']);
        }

        $query->sortBy('sortingValues.'.$params['sortBy'], $params['sortType']);
        return $query->toArray();
    }
}
