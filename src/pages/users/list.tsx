import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    Space,
    EditButton, CrudFilters, Form, Button, Input, Icons, Col, Row,
} from '@pankod/refine';
import { IPost, ICategory } from 'interfaces';
import {useState} from "react";

export const UserList: React.FC<IResourceComponentsProps> = () => {

    const [filters, setFilters] = useState<CrudFilters>([]);

    const generateFilter = (value: string): CrudFilters =>  value ? [{
        field: 'id',
        value: value.split(','),
        operator: 'eq'
    }]: [];


    const { tableProps, sorter } = useTable<IPost>({
        initialSorter: [
            {
                field: 'id',
                order: 'desc',
            },
        ],
        queryOptions: {
            enabled: !!filters.length,
        },
        permanentFilter: filters});


    const onFinish = (params: any) => {
        console.log(params);
        setFilters(generateFilter(params.q))
    };

    return (
        <Row gutter={[16, 16]}>
            <Col lg={6} xs={24}>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Search" name="q">
                        <Input
                            placeholder="ID, Title, Content, etc."
                            prefix={<Icons.SearchOutlined />}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">
                            Filter
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col  lg={18} xs={24}>
                { !!filters.length &&
                (
                    <List>
                        <Table {...tableProps} pagination={false} rowKey="id">
                            <Table.Column
                                dataIndex="id"
                                key="id"
                                title="ID"
                                render={(value) => <TextField value={value} />}
                                defaultSortOrder={getDefaultSortOrder('id', sorter)}
                                sorter
                            />
                            <Table.Column
                                dataIndex="firstName"
                                key="firstName"
                                title="FIRSTNAME"
                                render={(value) => <TextField value={value} />}
                                defaultSortOrder={getDefaultSortOrder('firstName', sorter)}
                                sorter
                            />
                            <Table.Column
                                dataIndex="lastName"
                                key="lastName"
                                title="LASTNAME"
                                render={(value) => <TextField value={value} />}
                                defaultSortOrder={getDefaultSortOrder('lastName', sorter)}
                                sorter
                            />
                            <Table.Column<IPost>
                                title="Actions"
                                dataIndex="actions"
                                render={(_, record) => (
                                    <Space>
                                        <EditButton hideText size="small" recordItemId={record.id} />
                                    </Space>
                                )}
                            />
                        </Table>
                    </List>)
                }
            </Col>
        </Row>

    );
};
