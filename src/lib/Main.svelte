<script>
	"use strict";

	import AddTodo from "./AddTodo.svelte";
	import List from "./List.svelte";

	let addTodo = $state("");
</script>

<h1>TODO LIST</h1>
<AddTodo {addTodo} />
<List />

<style></style>
