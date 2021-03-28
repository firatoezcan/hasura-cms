backend-dev:
	yarn --cwd "backend" dev;

frontend-dev:
	yarn --cwd "frontend" dev;

dev:
	make -j 2 backend-dev frontend-dev

backend-build:
	yarn --cwd "backend" build;

frontend-build:
	yarn --cwd "frontend" build;

build:
	make -j 2 backend-build frontend-build

backend-serve:
	yarn --cwd "backend" serve;

frontend-serve:
	yarn --cwd "frontend" serve;

serve:
	make -j 2 backend-serve frontend-serve

build/serve:
	make build
	make serve

backend-install:
	yarn --cwd "backend" install;

frontend-install:
	yarn --cwd "frontend" install;

install:
	make -j 2 backend-install frontend-install

cp-env:
	\cp -r .env frontend/.env && \cp -r .env backend/.env
