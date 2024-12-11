<?php

namespace App\Http\Controllers\Api;

use App\CustomClasses\ConfigSearch;
use App\Http\Controllers\Controller;
use App\Services\Config\Search\SearchStrategies\LatestSearchStrategyNew;
use App\Traits\RespondsWithHttpStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ConfigSearchController extends Controller
{
    use RespondsWithHttpStatus;


    public function search(Request $request)
    {
        // Validate request data
        Validator::make($request->all(), [
            'command' => 'required',
            'search_string' => 'required',
            'latest_version_only' => 'required|boolean',
        ])->validate();

        try {

            // Set pagination parameters
            $page = $request->input('page', 1); // Default to page 1
            $perPage = $request->input('per_page', 10); // Default to 10 results per page

            // Call the search strategy
            $result = (new LatestSearchStrategyNew())->searchConfigurations(
                $request['device_name'],
                $request['device_category'],
                $request['command'],
                $request['search_string'],
                $request['lines_before'],
                $request['lines_after'],
                $request['latest_version_only'] == 'true' ? true : false,
                $request['start_date'],
                $request['end_date'],
                $request['ignore_case'] == 'true' ? true : false,
                $page,
                $perPage
            );
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            activityLogIt(__CLASS__, __FUNCTION__, 'error', $e->getMessage(), 'config');
            return $this->failureResponse('An error occurred while searching configurations. Check the logs.', 500);
        }

        return $this->successResponse('Search results', $result);
    }
}
