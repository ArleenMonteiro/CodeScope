import { useEffect, useState, useCallback } from "react";


export default function AnalyzePage() {
	const [data, setData] = useState();
	const searchParams = useSearchParams();
	const id = searchParams.get("id");
	const [selectedProject, setSelectedProject] = useState();

	const getProject = useCallback(async () => {
		const response = await fetch(`api/project/${id}`);
		const reader = response.body.getReader();
		const decoder = new TextDecoder("utf-8");

		let temp = "";
		while (true) {
			const { value, done } = await reader.read();
			if (done) break;
			console.log(decoder.decode(value));
			try {
				const json = JSON.parse(temp + decoder.decode(value));
				console.log({ json });
				setData((d) => ({ ...d, ...json }));
				temp = "";
			} catch (error) {
				temp += decoder.decode(value);
				console.log(error);
			}
		}
	}, [setData]);

	useEffect(() => {
		if (id) getProject(id);
	}, [getProject, id]);

	console.log({ data });

	
			)}
			<div className="block">
				<Header project={data?.project} />
				{data?.githubInsights && <GithubInsights insigths={data?.githubInsights} />}
				{data?.similarProjects && (
					<SimilarProjects similarProjects={data?.similarProjects} setSelectedProject={setSelectedProject} />
				)}
				<div id="gradient" />
			</div>
			<style jsx>{scss}</style>
		</div>
	);
}
