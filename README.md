## Containerization
- Had to first install Docker Desktop for Mac
- Quick refresher on Docker commands via [Tutorial: Create a Docker app with Visual Studio Code](https://learn.microsoft.com/en-gb/visualstudio/docker/tutorials/docker-tutorial?WT.mc_id=vscode_docker_aka_getstartedwithdocker)

### Test build
- Using a node alpine image
```bash
docker build -t node-test .
```

### Test run
- Running the node-test image and checking "run locally and access via localhost"
```bash
docker run -d -p 3000:3000 node-test
```

### Test stop
- Stopping the node-test container
```bash
docker stop <container-id>
```

## Deployment
- Have used docker compose at the NZDF. Natural choice here given time requirements.
- Yet another refresher via [Docker Compose Quickstart](https://docs.docker.com/compose/gettingstarted/)

### Test build
```bash
docker-compose up
```

### Test stop
```bash
docker-compose down
```