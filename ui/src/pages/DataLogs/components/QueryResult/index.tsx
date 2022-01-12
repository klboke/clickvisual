import queryResultStyles from "@/pages/DataLogs/components/QueryResult/index.less";
import SearchBar from "@/pages/DataLogs/components/SearchBar";
import HighCharts from "@/pages/DataLogs/components/HighCharts";
import RawLogs from "@/pages/DataLogs/components/RawLogs";
import { useModel } from "@@/plugin-model/useModel";
import { Spin } from "antd";
import classNames from "classnames";
import RawLogsIndexes from "@/pages/DataLogs/components/RawLogsIndexes";
import ManageIndexModal from "@/pages/DataLogs/components/RawLogsIndexes/ManageIndexModal";

type QueryResultProps = {};
const QueryResult = (props: QueryResultProps) => {
  const {} = props;
  const { logsLoading, highChartLoading } = useModel("dataLogs");
  const isShare = document.location.pathname === "/share";

  return (
    <div
      className={classNames(
        queryResultStyles.queryResultMain,
        isShare && queryResultStyles.shareMain
      )}
    >
      <SearchBar />
      <Spin
        spinning={logsLoading || highChartLoading}
        tip={"加载中..."}
        wrapperClassName={queryResultStyles.querySpinning}
      >
        <RawLogsIndexes />
        <div className={queryResultStyles.queryDetail}>
          <HighCharts />
          <RawLogs />
        </div>
      </Spin>
      <ManageIndexModal />
    </div>
  );
};

export default QueryResult;
