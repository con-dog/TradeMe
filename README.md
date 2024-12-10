# Greeting App Deployment

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

## CI/CD Pipeline
- Using GitHub Actions for CI/CD pipeline, as I have briefly used that. But most of this is new to me.

### Build stage
- Leveraged LLM to understand what is being asked. Initially went off on the wrong path.
- job name: build

### Test stage
- Again, went off on the wrong path. Hard to find discussions around correct way to setup test environment. Questions like
  - Can I reuse the image from the build stage?
    - Seems like no, as each job is a separate runner.
    - Okay, so I separate into different jobs.
  - Should I use the docker-compose file to run the test stage?
    - I imagine a case where you want to test api / db together, so I went with building the compose file.
  - Deployment , TODO

- Tested locally first
```bash
docker compose run --rm api pnpm test
```

### Deployment stage
Ran out of time, too new to me.

## Triggering the pipeline
- I have setup the pipeline to trigger on push to main branch.
  - This probably isn't the best idea, instead would protect the main branch from direct pushes, and only allow PRs.
  - Instead set the trigger to run on PR to main etc.