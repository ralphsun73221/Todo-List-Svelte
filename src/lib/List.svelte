<script>
	"use strict";

	import AddTodo from "./AddTodo.svelte";
	let addTodo = $state("");
</script>

<div class="card card_list">
	<ul class="tab">
		<li data-tab="all" class="active">全部</li>
		<li data-tab="todo" class="">待完成</li>
		<li data-tab="done" class="">已完成</li>
	</ul>
	<div class="cart_content">
		<ul class="list"></ul>
		<div class="list_footer">
			<p id="todoCalculate">5 個待完成任務</p>
			<a href="/">清除已完成任務</a>
		</div>
	</div>
</div>

<style></style>
