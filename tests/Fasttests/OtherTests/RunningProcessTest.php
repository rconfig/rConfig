<?php

namespace Tests\Fasttests\OtherTests;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RunningProcessTest extends TestCase
{
    use WithFaker;

    protected $user;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = \App\Models\User::factory()->create();
        $this->actingAs($this->user);
    }

    public function test_check_supervisord_is_running()
    {
        $this->assertTrue($this->processExists('supervisord'));
    }

    public function test_check_redis_is_running()
    {
        $this->assertTrue($this->processExists('redis'));
    }

    public function test_check_supervisord_is_running_horizon()
    {
        exec('supervisorctl status', $result);
        $expectedResult = 'horizon';
        $this->assertStringContainsString($expectedResult, $result[0]);
    }

    public function processExists($processName)
    {
        $exists = false;
        exec("ps -A | grep -i $processName | grep -v grep", $pids);
        if (count($pids) > 0) {
            $exists = true;
        }

        return $exists;
    }
}
