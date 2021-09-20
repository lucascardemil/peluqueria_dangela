<?php

namespace App;

use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class FiltersService implements Filter
{
    public function __invoke(Builder $query, $value, string $property) : Builder
    {
        return $query->whereHas('serviceposts', function ($query) use($value) {
            $query->where('service_id', $value);
            //$query->groupBy('personals.id');
        });
    }
}
