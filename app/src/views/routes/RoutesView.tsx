import { RoutingService } from "../../api/RoutingService";

export const RoutesView = async () => {
  const service = new RoutingService();

  const result = await service.getRoutesData();

  if (!result || result.error || !result.data) {
    return <>{result?.error?.message}</>;
  }

  const { data } = result;

  return (
    <div style={{ width: 800 }}>
      {data.routes?.map((r, i) => {
        return (
          <div key={i}>
            <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <div>{r?.mode}</div>
              <div>{r?.shortName}</div>
              <div>{r?.desc}</div>
              <div>{r?.longName}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 16,
                paddingLeft: 16,
              }}
            >
              {r?.stops?.map((s) => <div key={s?.name}>[{s?.name}]</div>)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
