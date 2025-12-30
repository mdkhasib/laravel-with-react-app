<?php

namespace App\Http\Controllers\Api;

use App\Models\Todo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TodoController extends Controller
{
    public function index()
    {
        return Todo::latest()->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);

        return Todo::create([
            'title' => $request->title,
            'description' => $request->description
        ]);
    }

    public function update(Request $request, $id)
    {
        $todo = Todo::findOrFail($id);
        $todo->update($request->all());
        return $todo;
    }

    public function destroy($id)
    {
        Todo::destroy($id);
        return response()->json(['message' => 'Deleted']);
    }
}
