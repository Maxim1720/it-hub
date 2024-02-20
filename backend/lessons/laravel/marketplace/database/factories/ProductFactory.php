<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => fake()->word(),
            "description" => fake()->text(),
            "image" => fake()->imageUrl(),
            "price" => fake()->randomFloat(2, 0, 999999),
            "category_id" => Category::factory(),
        ];
    }
}
