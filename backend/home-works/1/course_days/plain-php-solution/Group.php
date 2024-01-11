<?php

/**
 * @author Maxim1720 <almatkruppov@gmail.com>
 * @note Group of it-hub course students.
 */
class Group
{
    private string $name;
    private array $days = [];

    /**
     *
     * @param $name : name of group
     * @type $days : group studying days
     */
    public function __construct(string $name, array $days)
    {
        $this->days = $days;
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return bool
     */
    public function isInStudyDays(string $day): bool
    {
        return in_array($day, $this->days, true);
    }

}

