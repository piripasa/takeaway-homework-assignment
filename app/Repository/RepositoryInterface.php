<?php


namespace App\Repository;


interface RepositoryInterface
{
    /**
     * @param array $params
     * @return array
     */
    public function filter(array $params): array;
}
