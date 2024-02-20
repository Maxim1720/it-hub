<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
//        return parent::toArray($request);
        return [
            "id" => $this->id,
            "title" => $this->title,
            "categoryId" => $this->category_id,
            "image" => $this->image,
            "price" => $this->price,
            "description" => $this->description
        ];
    }

}