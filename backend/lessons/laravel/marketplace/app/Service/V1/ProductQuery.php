<?php

namespace App\Service\V1;

use Illuminate\Http\Request;

class ProductQuery
{
    protected array $saveParams = [
        "title" => ["eq", "like"],
        "description" => ["like"],
        "price" => ["eq", "gt", "lt"],
        "categoryId" => ["eq"]
    ];

    protected array $columnMap = [
        "title" => "title",
        "description" => "description",
        "price" => "price",
        "categoryId" => "category_id",
    ];

    protected array $operator = [
        "eq" => "=",
        "gt" => ">",
        "lt" => "<",
        "like" => "like"
    ];

    protected array $defaultOrder = [
        "id", "asc"
    ];

    private array $safeOrderParams = [
        "title"=>["asc", "desc"],
        "price"=>["asc", "desc"]
    ];

    private array $operatorOrderMap = [
        "asc"=>"asc",
        "desc"=>"desc"
    ];

    public function transform(Request $request)
    {
        $eloQuery = [];
        foreach ($this->saveParams as $param => $operators) {
            $query = $request->query($param);

            if (!isset($query)) {
                continue;
            } else if (!isset($this->columnMap[$param])) {
                continue;
            }

            $column = $this->columnMap[$param];

            foreach ($operators as $operator) {
                if (isset($query[$operator])) {
                    $value = $query[$operator];
                    if ($operator == "like") {
                        $value = "%" . $query[$operator] . "%";
                    }
                    $eloQuery[] = [$column, $this->operator[$operator], $value];
                }
            }
        }
        return $eloQuery;

    }

    public function transformOrder(Request $request): array
    {
        $order = $request->get("_orderBy");
        foreach ($order as $direction => $column){
            if(isset($this->safeOrderParams[$column])){
                $column = $this->columnMap[$column];
                if(in_array($direction, $this->operatorOrderMap) && in_array($column, $this->columnMap)){
                    return [$column, $direction];
                }
            }
        }
        return $this->defaultOrder;
    }
}
