<script>
	"use strict";

	let { addTodo = $bindable() } = $props();
	$effect(() => {
		console.log(addTodo);
	});
</script>

<div class="card input">
	<input type="text" placeholder="請輸入待辦任務" bind:value={addTodo} />
	<a href="/" class="btn_add">+</a>
</div>

<style></style>
