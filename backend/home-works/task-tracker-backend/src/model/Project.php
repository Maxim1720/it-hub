<?php

namespace Taskforge\Backend\model;

class Project
{
    private int $id;
    private string $name;
    private string $description;
    private User $user;

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): void
    {
        $this->user = $user;
    }

    private \DateTime $expiryAt;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function getExpiryAt(): \DateTime
    {
        return $this->expiryAt;
    }

    public function setExpiryAt(\DateTime $expiryAt): void
    {
        $this->expiryAt = $expiryAt;
    }

}