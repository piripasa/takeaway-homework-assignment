<?php

namespace App\Services\Transformer;

use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Collection as SupportCollection;

abstract class BaseTransformer
{
    abstract public function transform ($object);

    /**
     * @param $collection
     * @param string $callback
     * @param string $dataKey
     * @param mixed ...$arguments
     * @return array
     */
    public function transformCollection ($collection, $callback = 'transform', $dataKey = 'data', ...$arguments)
    {
        if (!($collection instanceof Collection) && !($collection instanceof Paginator) && !($collection instanceof SupportCollection)) {
            throw new TransformerException();
        }
        $data = [];
        $results = $this->transformCollectionRaw($collection, $callback, ...$arguments);
        $data = array_merge($data, [ $dataKey => $results->toArray() ]);
        if ($collection instanceof Paginator) {
            $data['paginate'] = [
                'current_page'  => $collection->currentPage(),
                'per_page'      => (int) $collection->perPage(),
                'total_in_page' => $collection->count(),
                'total_page'    => $collection->lastPage(),
                'total'         => $collection->total(),
            ];
        }

        return $data;
    }

    /**
     * @param $collection
     * @param string $callback
     * @param mixed ...$arguments
     * @return Collection|SupportCollection
     */
    public function transformCollectionRaw ($collection, $callback = 'transform', ...$arguments)
    {
        if (!($collection instanceof Collection) && !($collection instanceof Paginator) && !($collection instanceof SupportCollection)) {
            throw new TransformerException();
        }

        return $collection->map(function ($row) use ($callback, $arguments) {
            return call_user_func_array(array( $this, $callback ), [ $row, $arguments ]);
        });
    }
}
