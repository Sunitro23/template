# Template web statique

Le site peut être servi directement par Caddy depuis ce dossier ou par Docker :

```sh
docker build -t template-static .
docker run --rm -p 8080:80 template-static
```
