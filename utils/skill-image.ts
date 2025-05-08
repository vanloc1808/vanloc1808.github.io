interface SkillImage {
  src: string;
}

export const skillsImage = (skill: string): SkillImage => {
  const skillId = skill.toLowerCase();
  switch (skillId) {
    case "html":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      };
    case "css":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      };
    case "javascript":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      };
    case "typescript":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      };
    case "react":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      };
    case "nextjs":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      };
    case "nodejs":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      };
    case "express":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      };
    case "mongodb":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      };
    case "postgresql":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      };
    case "mysql":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      };
    case "python":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      };
    case "django":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg",
      };
    case "flask":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
      };
    case "docker":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      };
    case "kubernetes":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-original.svg",
      };
    case "aws":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      };
    case "azure":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
      };
    case "gcp":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
      };
    case "git":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      };
    case "github":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      };
    case "gitlab":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg",
      };
    case "bitbucket":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg",
      };
    case "vscode":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      };
    case "vim":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vim/vim-original.svg",
      };
    case "linux":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      };
    case "ubuntu":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg",
      };
    case "debian":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/debian/debian-original.svg",
      };
    case "centos":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/centos/centos-original.svg",
      };
    case "redhat":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redhat/redhat-original.svg",
      };
    case "windows":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg",
      };
    case "macos":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg",
      };
    case "android":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
      };
    case "ios":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg",
      };
    case "flutter":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
      };
    case "reactnative":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      };
    case "swift":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
      };
    case "kotlin":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
      };
    case "java":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      };
    case "spring":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
      };
    case "c":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      };
    case "cpp":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      };
    case "csharp":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      };
    case "dotnet":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
      };
    case "php":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      };
    case "laravel":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg",
      };
    case "ruby":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
      };
    case "rails":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
      };
    case "go":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
      };
    case "rust":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg",
      };
    case "scala":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg",
      };
    case "haskell":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/haskell/haskell-original.svg",
      };
    case "elixir":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/elixir/elixir-original.svg",
      };
    case "erlang":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/erlang/erlang-original.svg",
      };
    case "clojure":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/clojure/clojure-original.svg",
      };
    case "ocaml":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ocaml/ocaml-original.svg",
      };
    case "fsharp":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fsharp/fsharp-original.svg",
      };
    case "r":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg",
      };
    case "julia":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/julia/julia-original.svg",
      };
    case "matlab":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg",
      };
    case "tensorflow":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
      };
    case "pytorch":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
      };
    case "keras":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg",
      };
    case "scikit-learn":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikit-learn/scikit-learn-original.svg",
      };
    case "pandas":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
      };
    case "numpy":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      };
    case "jupyter":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg",
      };
    case "rstudio":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rstudio/rstudio-original.svg",
      };
    case "spark":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apache-spark/apache-spark-original.svg",
      };
    case "hadoop":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/hadoop/hadoop-original.svg",
      };
    case "kafka":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apache-kafka/apache-kafka-original.svg",
      };
    case "rabbitmq":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rabbitmq/rabbitmq-original.svg",
      };
    case "redis":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      };
    case "elasticsearch":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg",
      };
    case "solr":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apache-solr/apache-solr-original.svg",
      };
    case "neo4j":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/neo4j/neo4j-original.svg",
      };
    case "cassandra":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apache-cassandra/apache-cassandra-original.svg",
      };
    case "couchdb":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/couchdb/couchdb-original.svg",
      };
    case "firebase":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
      };
    case "supabase":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg",
      };
    case "graphql":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
      };
    case "rest":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg",
      };
    case "grpc":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grpc/grpc-original.svg",
      };
    case "websocket":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/websocket/websocket-original.svg",
      };
    case "socket.io":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/socket.io/socket.io-original.svg",
      };
    case "nginx":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
      };
    case "apache":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg",
      };
    case "jenkins":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
      };
    case "travis":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/travis/travis-plain.svg",
      };
    case "circleci":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/circleci/circleci-plain.svg",
      };
    case "github-actions":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      };
    case "gitlab-ci":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg",
      };
    case "bitbucket-pipelines":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg",
      };
    case "terraform":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg",
      };
    case "ansible":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg",
      };
    case "puppet":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/puppet/puppet-original.svg",
      };
    case "chef":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/chef/chef-original.svg",
      };
    case "saltstack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/saltstack/saltstack-original.svg",
      };
    case "prometheus":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg",
      };
    case "grafana":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg",
      };
    case "elk":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg",
      };
    case "splunk":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/splunk/splunk-original.svg",
      };
    case "datadog":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/datadog/datadog-original.svg",
      };
    case "newrelic":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/newrelic/newrelic-original.svg",
      };
    case "pagerduty":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pagerduty/pagerduty-original.svg",
      };
    case "opsgenie":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opsgenie/opsgenie-original.svg",
      };
    case "victorops":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/victorops/victorops-original.svg",
      };
    case "sentry":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sentry/sentry-original.svg",
      };
    case "rollbar":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rollbar/rollbar-original.svg",
      };
    case "bugsnag":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bugsnag/bugsnag-original.svg",
      };
    case "airbrake":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/airbrake/airbrake-original.svg",
      };
    case "raygun":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/raygun/raygun-original.svg",
      };
    case "logentries":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/logentries/logentries-original.svg",
      };
    case "papertrail":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/papertrail/papertrail-original.svg",
      };
    case "loggly":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/loggly/loggly-original.svg",
      };
    case "sumologic":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sumologic/sumologic-original.svg",
      };
    case "graylog":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graylog/graylog-original.svg",
      };
    case "logz.io":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/logz/logz-original.svg",
      };
    case "humio":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/humio/humio-original.svg",
      };
    case "loki":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/loki/loki-original.svg",
      };
    case "jaeger":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jaeger/jaeger-original.svg",
      };
    case "zipkin":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/zipkin/zipkin-original.svg",
      };
    case "opentelemetry":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opentelemetry/opentelemetry-original.svg",
      };
    case "lightstep":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/lightstep/lightstep-original.svg",
      };
    case "honeycomb":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/honeycomb/honeycomb-original.svg",
      };
    case "datadog-apm":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/datadog/datadog-original.svg",
      };
    case "newrelic-apm":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/newrelic/newrelic-original.svg",
      };
    case "dynatrace":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dynatrace/dynatrace-original.svg",
      };
    case "appdynamics":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/appdynamics/appdynamics-original.svg",
      };
    case "instana":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/instana/instana-original.svg",
      };
    case "elastic-apm":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg",
      };
    case "grafana-tempo":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg",
      };
    case "signoz":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/signoz/signoz-original.svg",
      };
    case "uptrace":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/uptrace/uptrace-original.svg",
      };
    case "opstrace":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opstrace/opstrace-original.svg",
      };
    case "coralogix":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/coralogix/coralogix-original.svg",
      };
    case "logz.io-apm":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/logz/logz-original.svg",
      };
    case "elastic-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg",
      };
    case "graylog-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graylog/graylog-original.svg",
      };
    case "loki-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/loki/loki-original.svg",
      };
    case "jaeger-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jaeger/jaeger-original.svg",
      };
    case "zipkin-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/zipkin/zipkin-original.svg",
      };
    case "opentelemetry-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opentelemetry/opentelemetry-original.svg",
      };
    case "lightstep-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/lightstep/lightstep-original.svg",
      };
    case "honeycomb-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/honeycomb/honeycomb-original.svg",
      };
    case "datadog-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/datadog/datadog-original.svg",
      };
    case "newrelic-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/newrelic/newrelic-original.svg",
      };
    case "dynatrace-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dynatrace/dynatrace-original.svg",
      };
    case "appdynamics-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/appdynamics/appdynamics-original.svg",
      };
    case "instana-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/instana/instana-original.svg",
      };
    case "elastic-stack-apm":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg",
      };
    case "grafana-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg",
      };
    case "signoz-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/signoz/signoz-original.svg",
      };
    case "uptrace-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/uptrace/uptrace-original.svg",
      };
    case "opstrace-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opstrace/opstrace-original.svg",
      };
    case "coralogix-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/coralogix/coralogix-original.svg",
      };
    case "logz.io-stack":
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/logz/logz-original.svg",
      };
    default:
      return {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      };
  }
};