<?php

namespace Tests\Fasttests\ControllersTests\Api;

use Tests\TestCase;

class DashboardControllerTest extends TestCase
{
    protected $user;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = \App\Models\User::factory()->create();
        $this->actingAs($this->user, 'api');
    }

    public function test_sys_info_test()
    {
        $response = $this->json('get', '/api/dashboard/sysinfo');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'OSVersion',
            'localIp',
            'PublicIP',
            'ServerName',
            'PHPVersion',
            'RedisVersion',
            'MySQLVersion',
        ]);
    }

    public function test_config_info_test()
    {
        $response = $this->json('get', '/api/dashboard/configinfo');
        $response->assertStatus(200);
        $response->assertJsonStructure(
            [
                'success',
                'data' => [
                    'deviceCount',
                    'deviceDownCount',
                    'configTotalCount',
                    'configDownCount',
                ],
                'message',
            ]
        );
    }
}
