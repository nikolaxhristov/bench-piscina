#!/bin/bash

hyperfine \
	--export-markdown ./bench/parallel.md \
	'node ./dist/lib/parallel.js'

hyperfine \
	--export-markdown ./bench/piscina.md \
	'node ./dist/lib/piscina.js'

hyperfine \
	--export-markdown ./bench/serial.md \
	'node ./dist/lib/serial.js'

hyperfine \
	--export-markdown ./bench/parallel-no-await.md \
	'node ./dist/lib/parallel-no-await.js'

hyperfine \
	--export-markdown ./bench/piscina-no-await.md \
	'node ./dist/lib/piscina-no-await.js'

hyperfine \
	--export-markdown ./bench/serial-no-await.md \
	'node ./dist/lib/serial-no-await.js'

{
	printf '# parallel-piscina-benchmark\n'
	printf '\n## Parallel\n'
	cat ./bench/parallel.md
	printf '\n## Piscina\n'
	cat ./bench/piscina.md
	printf '\n## Serial\n'
	cat ./bench/serial.md
	printf '\n## Parallel No Await\n'
	cat ./bench/parallel-no-await.md
	printf '\n## Piscina No Await\n'
	cat ./bench/piscina-no-await.md
	printf '\n## Serial No Await\n'
	cat ./bench/serial-no-await.md
} >README.md