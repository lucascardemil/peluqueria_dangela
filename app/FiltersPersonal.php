<?php

namespace App;

use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class FiltersPersonal implements Filter
{
    public function __invoke(Builder $query, $value, string $property) : Builder
    {
        return $query->whereHas('serviceposts.personalposts', function ($query) use($value) {
            $query->where('personalposts.personal_id', $value);
        });
    }
}
